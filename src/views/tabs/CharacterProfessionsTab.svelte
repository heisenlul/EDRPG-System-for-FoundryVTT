<script>
   import { professions } from "../../system/game.js";

   export let document;

   $: selectedProfessions = $document.itemTypes?.profession ?? [];

   async function addProfession(profession) {
      const actor = document.get();

      const alreadySelected = actor.items.some(
        (item) =>
      item.type === "profession" &&
      item.name === profession.name,
        );

      if (alreadySelected) {
         ui.notifications.warn(
            `Ya tienes la Profession "${profession.name}".`,
         );
         return;
      }

      await actor.createEmbeddedDocuments("Item", [
         {
            name: profession.name,
            type: "profession",
            system: {
               description: profession.description,
               requirements: profession.requirements,
               effect: profession.effect,
               free: profession.free,
            },
         },
      ]);
   }

   async function removeProfession(profession) {
      const actor = document.get();

      await actor.deleteEmbeddedDocuments("Item", [profession.id]);
   }
</script>

<div class="p-4">

   <h2 class="text-xl font-bold mb-4">
      Professions
   </h2>

   {#if selectedProfessions.length > 0}

      <div class="space-y-3 mb-6">
         {#each selectedProfessions as profession}

            <div class="border rounded p-3 bg-gray-50">

               <div class="flex justify-between items-start gap-3">

                  <div>
                     <h3 class="font-bold text-lg">
                        {profession.name}
                     </h3>

                     {#if profession.system.description}
                        <p class="mt-1">
                           {profession.system.description}
                        </p>
                     {/if}

                     {#if profession.system.effect}
                        <p class="mt-2">
                           <strong>Effect:</strong>
                           {profession.system.effect}
                        </p>
                     {/if}
                  </div>

                  <button
                     type="button"
                     class="px-2 py-1 border rounded"
                     on:click={() => removeProfession(profession)}
                  >
                     ✕
                  </button>

               </div>

            </div>

         {/each}
      </div>

   {:else}

      <p class="mb-6">
         No tienes ninguna Profession seleccionada.
      </p>

   {/if}

   <h3 class="text-lg font-bold mb-3">
      Available Professions
   </h3>

   <div class="space-y-2">

      {#each professions as profession}

         {@const selected = selectedProfessions.some(
            (item) => item.name === profession.name
         )}

         <div class="border rounded p-3">

            <div class="flex justify-between items-center gap-3">

               <div>
                  <strong>{profession.name}</strong>

                  {#if profession.free}
                     <span class="ml-2 text-sm">
                        (Free)
                     </span>
                  {/if}
               </div>

               <button
                  type="button"
                  class="px-3 py-1 border rounded"
                  disabled={selected}
                  on:click={() => addProfession(profession)}
               >
                  {selected ? "Selected" : "Add"}
               </button>

            </div>

            {#if profession.description}
               <p class="mt-1 text-sm">
                  {profession.description}
               </p>
            {/if}

            {#if profession.effect}
               <p class="mt-1 text-sm">
                  <strong>Effect:</strong>
                  {profession.effect}
               </p>
            {/if}

         </div>

      {/each}

   </div>

</div>