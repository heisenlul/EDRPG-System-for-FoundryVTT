<script>
   import { onDestroy } from "svelte";

   export let document;

   let catalogWeapons = [];
   let characterWeapons = [];
   let showCatalog = false;

   function refreshItems() {
      catalogWeapons = game.items
         .filter((item) => item.type === "equipment" && item.system.category === "weapon")
         .sort((a, b) => a.system.price - b.system.price);

      characterWeapons = document.get()?.items
         ?.filter((item) => item.type === "equipment" && item.system.category === "weapon")
         ?.sort((a, b) => a.system.price - b.system.price) ?? [];
   }

   refreshItems();

   const createHookId = Hooks.on("createItem", refreshItems);
   const updateHookId = Hooks.on("updateItem", refreshItems);
   const deleteHookId = Hooks.on("deleteItem", refreshItems);

   onDestroy(() => {
      Hooks.off("createItem", createHookId);
      Hooks.off("updateItem", updateHookId);
      Hooks.off("deleteItem", deleteHookId);
   });

   async function addWeapon(item) {
      const actor = document.get();

      const existing = actor.items.find(
         (characterItem) =>
            characterItem.type === "equipment" &&
            characterItem.name === item.name &&
            characterItem.system.category === "weapon",
      );

      if (existing) {
         await existing.update({
            "system.quantity": existing.system.quantity + 1,
         });
      } else {
         await actor.createEmbeddedDocuments("Item", [
            {
               ...item.toObject(),
               _id: null,
            },
         ]);
      }

      refreshItems();
   }

   async function increaseQuantity(item) {
      await item.update({
         "system.quantity": item.system.quantity + 1,
      });

      refreshItems();
   }

   async function decreaseQuantity(item) {
      const quantity = item.system.quantity;

      if (quantity <= 1) {
         await item.delete();
      } else {
         await item.update({
            "system.quantity": quantity - 1,
         });
      }

      refreshItems();
   }

   async function removeItem(item) {
      await item.delete();
      refreshItems();
   }

   const categories = [
      { id: "weapon", name: "Arma" },
      { id: "ammunition", name: "Munición" },
      { id: "clothing", name: "Ropa" },
      { id: "equipment1", name: "Equipamento 1" },
      { id: "equipment2", name: "Equipamento 2" },
      { id: "equipment3", name: "Equipamento 3" },
      { id: "melee", name: "Arma cuerpo a cuerpo" },
      { id: "grenade", name: "Granadas" },
      { id: "money", name: "Dinero" },
   ];
</script>
<div class="flex justify-end mb-2">
   <button
      type="button"
      on:click={() => (showCatalog = !showCatalog)}
   >
      {showCatalog ? "Cerrar catálogo" : "Catálogo"}
   </button>
</div>
<div class="grid grid-cols-1 gap-4">
   {#each categories as category}
      <div>
         <h2
            class="bg-gradient-to-r from-section-begin to-section-end px-1.5 text-white text-base uppercase font-expanded
                   [clip-path:polygon(0_0,50%_0,55%_66.7%,97.5%_66.7%,100%_100%,0_100%)]"
         >
            {category.name}
         </h2>

         <div class="p-2">
            {#if category.id === "weapon"}

               <!-- EQUIPO DEL PERSONAJE -->
<h3 class="font-bold mb-2">
   Equipo del personaje
</h3>

{#if characterWeapons.length > 0}
   <div class="grid gap-1 mb-4">
      {#each characterWeapons as item}
         <div class="border border-gray-300 p-2">

            <div class="flex justify-between items-center">
               <div>
                  <strong>{item.name}</strong>

                  <div class="text-sm text-muted">
                     {item.system.weaponType}
                     · {item.system.damage}
                     · Munición: {item.system.ammo}
                  </div>
               </div>

               <div class="flex items-center gap-1">
                  <button
                     type="button"
                     title="Reducir cantidad"
                     on:click={() => decreaseQuantity(item)}
                  >
                     −
                  </button>

                  <span class="min-w-6 text-center">
                     {item.system.quantity}
                  </span>

                  <button
                     type="button"
                     title="Aumentar cantidad"
                     on:click={() => increaseQuantity(item)}
                  >
                     +
                  </button>

                  <button
                     type="button"
                     title="Eliminar"
                     on:click={() => removeItem(item)}
                  >
                     🗑
                  </button>
               </div>
            </div>

         </div>
      {/each}
   </div>
{:else}
   <p class="text-muted mb-4">
      Sin armas.
   </p>
{/if}

                  {:else if category.id === "melee"}
            <h3 class="font-bold mb-2">
               Armas cuerpo a cuerpo
            </h3>

            <p class="text-muted">
               Sin armas cuerpo a cuerpo.
            </p>

         {:else}
            <p class="text-muted">
               Sin objetos.
            </p>
         {/if}
         </div>
      </div>
   {/each}
</div>

{#if showCatalog}
   <div class="border border-gray-300 p-3 mt-4">

      <div class="flex justify-between items-center mb-3">
         <h2 class="font-bold uppercase">
            Catálogo de equipamiento
         </h2>

         <button
            type="button"
            on:click={() => (showCatalog = false)}
            title="Cerrar catálogo"
         >
            ✕
         </button>
      </div>

      <h3 class="font-bold mb-2">
         Armas
      </h3>

      {#if catalogWeapons.length > 0}
         <div class="grid gap-1">
            {#each catalogWeapons as item}
               <div class="border border-gray-300 p-2">

                  <div class="flex justify-between items-center">
                     <strong>{item.name}</strong>

                     <button
                        type="button"
                        on:click={() => addWeapon(item)}
                     >
                        Añadir
                     </button>
                  </div>

                  <div class="text-sm text-muted">
                     {item.system.weaponType}
                     · {item.system.damage}
                     · Munición: {item.system.ammo}
                     · {item.system.price} cr
                  </div>

                  <div class="text-sm text-muted">
                     Corta: {item.system.rangeShort.distance} m
                     ({item.system.rangeShort.modifier})
                     · Media: {item.system.rangeMedium.distance} m
                     ({item.system.rangeMedium.modifier})
                     · Larga: {item.system.rangeLong.distance} m
                     ({item.system.rangeLong.modifier})
                  </div>

                  {#if item.system.notes}
                     <div class="text-sm text-muted">
                        {item.system.notes}
                     </div>
                  {/if}

               </div>
            {/each}
         </div>
      {:else}
         <p class="text-muted">
            No hay armas en el catálogo.
         </p>
      {/if}

   </div>
{/if}