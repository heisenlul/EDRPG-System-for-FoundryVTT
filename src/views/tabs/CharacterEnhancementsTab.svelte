<script>
   import { enhancements } from "../../system/content.js";

   export let document;

   $: selectedEnhancements =
      $document.itemTypes?.enhancement ?? [];

   function hasEnhancement(name) {
      return selectedEnhancements.some(
         (enhancement) => enhancement.name === name
      );
   }

   async function addEnhancement(enhancement) {
      const actor = document.get();

      if (hasEnhancement(enhancement.name)) {
         ui.notifications.warn(
            `Ya tienes el Enhancement "${enhancement.name}".`
         );
         return;
      }

      await actor.createEmbeddedDocuments("Item", [
         {
            name: enhancement.name,
            type: "enhancement",
            system: {
               description: enhancement.description,
               effect: enhancement.effect,
               source: enhancement.source,
            },
         },
      ]);
   }

   async function removeEnhancement(enhancement) {
      const actor = document.get();

      await actor.deleteEmbeddedDocuments("Item", [
         enhancement.id,
      ]);
   }
</script>

<div class="p-4">
   <h2 class="text-xl font-bold mb-4">
      Enhancements
   </h2>

   <div class="space-y-3">
      {#each enhancements as enhancement}
         <div class="border rounded p-3 bg-gray-50">
            <div class="flex justify-between items-start gap-3">
               <div>
                  <h3 class="font-bold text-lg">
                     {enhancement.name}
                  </h3>

                  {#if enhancement.source}
                     <p class="text-xs opacity-70">
                        {enhancement.source}
                     </p>
                  {/if}

                  {#if enhancement.description}
                     <p class="mt-1">
                        {enhancement.description}
                     </p>
                  {/if}

                  {#if enhancement.effect}
                     <p class="mt-2">
                        <strong>Effect:</strong>
                        {enhancement.effect}
                     </p>
                  {/if}
               </div>

               {#if hasEnhancement(enhancement.name)}
                  {#each selectedEnhancements.filter(
                     (selected) =>
                        selected.name === enhancement.name
                  ) as selected}
                     <button
                        type="button"
                        class="px-2 py-1 border rounded"
                        on:click={() =>
                           removeEnhancement(selected)}
                     >
                        ✕
                     </button>
                  {/each}
               {:else}
                  <button
                     type="button"
                     class="px-3 py-1 border rounded font-bold"
                     on:click={() =>
                        addEnhancement(enhancement)}
                  >
                     Añadir
                  </button>
               {/if}
            </div>
         </div>
      {/each}
   </div>
</div>