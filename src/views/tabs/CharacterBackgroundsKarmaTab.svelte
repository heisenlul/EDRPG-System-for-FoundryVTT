<script>
   import { backgrounds, karmaCapabilities } from "../../system/content.js";

   export let document;

   $: selectedBackgrounds = $document.itemTypes?.background ?? [];
   $: selectedKarma = $document.itemTypes?.karma ?? [];

	async function addBackground(background) {
   const actor = document.get();

   const maxBackgrounds = game.settings.get("edrpg", "systemMaxBackgrounds");

   const alreadySelected = actor.itemTypes.background.some(
      (item) => item.name === background.name,
   );

   if (alreadySelected) {
      ui.notifications.warn(`Ya tienes el Background "${background.name}".`);
      return;
   }

   const usedChoices = actor.itemTypes.background.reduce(
      (total, item) => total + (item.system.choices ?? 1),
      0,
   );

   if (
      maxBackgrounds > 0 &&
      usedChoices + background.choices > maxBackgrounds
   ) {
      ui.notifications.warn(
         `No tienes suficientes elecciones de Background. Necesitas ${background.choices} y tienes ${maxBackgrounds - usedChoices} disponibles.`,
      );
      return;
   }

   await actor.createEmbeddedDocuments("Item", [
      {
         name: background.name,
         type: "background",
         system: {
            description: background.description,
            choices: background.choices,
            enhancement: background.enhancement,
            skills: background.skills,
         },
      },
   ]);
}

   async function addKarma(capability) {
   const actor = document.get();

   const alreadySelected = actor.itemTypes.karma.some(
      (item) => item.name === capability.name,
   );

   if (alreadySelected) {
      ui.notifications.warn(`Ya tienes la capacidad de Karma "${capability.name}".`);
      return;
   }

   const limit = actor.system.karmaCapabilityLimit;

   if (actor.itemTypes.karma.length >= limit) {
      ui.notifications.warn(
         `Has alcanzado el máximo de ${limit} capacidades de Karma.`,
      );
      return;
   }

   await actor.createEmbeddedDocuments("Item", [
      {
         name: capability.name,
         type: "karma",
         system: {
            description: capability.description,
            cost: capability.cost,
            category: capability.category,
         },
      },
   ]);
}

   async function removeItem(item) {
      await document.get().deleteEmbeddedDocuments("Item", [item.id]);
   }
</script>

<div class="grid grid-cols-2 gap-4">

   <div>
      <h2
         class="bg-gradient-to-r from-section-begin to-section-end px-1.5 text-white text-base uppercase font-expanded
                [clip-path:polygon(0_0,50%_0,55%_66.7%,97.5%_66.7%,100%_100%,0_100%)]"
      >
         Backgrounds
      </h2>

      <div class="p-2">
         <h3>Elegir Background</h3>

         {#each backgrounds as background}
            <div class="flex items-center justify-between border border-border p-2 mb-1">
               <span>{background.name}</span>
               <button type="button" on:click={() => addBackground(background)}>
                  Añadir
               </button>
            </div>
         {/each}
      </div>

      <div class="p-2">
         <h3>
   Backgrounds (
   {selectedBackgrounds.reduce(
      (total, background) => total + (background.system.choices ?? 1),
      0,
   )}
   {#if game.settings.get("edrpg", "systemMaxBackgrounds") > 0}
      / {game.settings.get("edrpg", "systemMaxBackgrounds")}
   {:else}
      / ∞
   {/if}
   )
</h3>

         {#if selectedBackgrounds.length === 0}
            <p>No backgrounds.</p>
         {:else}
            {#each selectedBackgrounds as background}
               <div class="border border-border p-2 mb-2">
                  <div class="flex items-center justify-between">
                     <strong>{background.name}</strong>
                     <button type="button" on:click={() => removeItem(background)}>
                        Eliminar
                     </button>
                  </div>

                  {#if background.system.description}
                     <p>{background.system.description}</p>
                  {/if}
               </div>
            {/each}
         {/if}
      </div>
   </div>


   <div>
      <h2
         class="bg-gradient-to-r from-karma-begin to-karma-end px-1.5 text-white text-base uppercase font-expanded
                [clip-path:polygon(0_0,50%_0,55%_66.7%,97.5%_66.7%,100%_100%,0_100%)]"
      >
         Karma
      </h2>

      <div class="p-2">
         <h3>Elegir Karma</h3>

         {#each karmaCapabilities as capability}
            <div class="flex items-center justify-between border border-border p-2 mb-1">
               <span>{capability.name} ({capability.cost} Karma)</span>
               <button type="button" on:click={() => addKarma(capability)}>
                  Añadir
               </button>
            </div>
         {/each}
      </div>

      <div class="p-2">
         <h3>Karma elegido</h3>

         {#if selectedKarma.length === 0}
            <p>No karma capabilities.</p>
         {:else}
            {#each selectedKarma as capability}
               <div class="border border-border p-2 mb-2">
                  <div class="flex items-center justify-between">
                     <strong>{capability.name}</strong>
                     <button type="button" on:click={() => removeItem(capability)}>
                        Eliminar
                     </button>
                  </div>

                  {#if capability.system.description}
                     <p>{capability.system.description}</p>
                  {/if}

                  <span>Coste: {capability.system.cost}</span>
               </div>
            {/each}
         {/if}
      </div>
   </div>

</div>
