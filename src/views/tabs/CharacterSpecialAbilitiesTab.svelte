<script>
   import { specialAbilities } from "../../system/content.js";

   export let document;

   $: selectedSpecialAbilities =
      $document.itemTypes?.specialAbility ?? [];

   async function addSpecialAbility(ability) {
      const actor = document.get();

      const alreadySelected = actor.items.some(
        (item) =>
      item.type === "specialAbility" &&
      item.name === ability.name,
        );

      if (alreadySelected) {
         ui.notifications.warn(
            `Ya tienes la Special Ability "${ability.name}".`,
         );
         return;
      }

      await actor.createEmbeddedDocuments("Item", [
         {
            name: ability.name,
            type: "specialAbility",
            system: {
               description: ability.description,
               requirements: ability.requirements,
               effect: ability.effect,
               disadvantage: ability.disadvantage,
            },
         },
      ]);
   }

   async function removeSpecialAbility(ability) {
      const actor = document.get();

      await actor.deleteEmbeddedDocuments("Item", [ability.id]);
   }
</script>

<div class="p-4">
   <h2 class="text-xl font-bold mb-4">
      Special Abilities
   </h2>

   {#if selectedSpecialAbilities.length > 0}
      <div class="space-y-3 mb-6">
         {#each selectedSpecialAbilities as ability}
            <div class="border rounded p-3 bg-gray-50">
               <div class="flex justify-between items-start gap-3">
                  <div>
                     <h3 class="font-bold text-lg">
                        {ability.name}
                     </h3>

                     {#if ability.system.description}
                        <p class="mt-1">
                           {ability.system.description}
                        </p>
                     {/if}

                     {#if ability.system.effect}
                        <p class="mt-2">
                           <strong>Effect:</strong>
                           {ability.system.effect}
                        </p>
                     {/if}

                     {#if ability.system.disadvantage}
                        <p class="mt-2">
                           <strong>Disadvantage:</strong>
                           {ability.system.disadvantage}
                        </p>
                     {/if}
                  </div>

                  <button
                     type="button"
                     class="px-2 py-1 border rounded"
                     on:click={() => removeSpecialAbility(ability)}
                  >
                     ✕
                  </button>
               </div>
            </div>
         {/each}
      </div>
   {:else}
      <p class="mb-6">
         No tienes ninguna Special Ability seleccionada.
      </p>
   {/if}

   <h3 class="text-lg font-bold mb-3">
      Available Special Abilities
   </h3>

   <div class="space-y-2">
      {#each specialAbilities as ability}
         {@const selected = selectedSpecialAbilities.some(
            (item) => item.name === ability.name
         )}

         <div class="border rounded p-3">
            <div class="flex justify-between items-center gap-3">
               <div>
                  <strong>{ability.name}</strong>
               </div>

               <button
                  type="button"
                  class="px-3 py-1 border rounded"
                  disabled={selected}
                  on:click={() => addSpecialAbility(ability)}
               >
                  {selected ? "Selected" : "Add"}
               </button>
            </div>

            {#if ability.description}
               <p class="mt-1 text-sm">
                  {ability.description}
               </p>
            {/if}

            {#if ability.effect}
               <p class="mt-1 text-sm">
                  <strong>Effect:</strong>
                  {ability.effect}
               </p>
            {/if}

            {#if ability.disadvantage}
               <p class="mt-1 text-sm">
                  <strong>Disadvantage:</strong>
                  {ability.disadvantage}
               </p>
            {/if}
         </div>
      {/each}
   </div>
</div>