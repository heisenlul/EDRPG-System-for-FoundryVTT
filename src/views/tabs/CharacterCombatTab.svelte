<script>
   import { localize } from "#runtime/svelte/helper";

   export let document;
</script>

<div class="grid grid-cols-2 gap-4">

   <div>
      <h2
         class="bg-gradient-to-r from-section-begin to-section-end px-1.5 text-white text-base uppercase font-expanded
                [clip-path:polygon(0_0,50%_0,55%_66.7%,97.5%_66.7%,100%_100%,0_100%)]"
      >
         Combat
      </h2>

      <table class="bg-transparent m-0 border-separate border-spacing-1 w-full">
         <thead>
            <tr>
               <th class="bg-table-header px-1.5 py-1 text-white text-right font-bold uppercase">
                  Skill
               </th>
               <th class="bg-table-header px-1 py-1 text-white font-bold uppercase">
                  Value
               </th>
               <th class="bg-table-header px-1 py-1 text-white font-bold uppercase">
                  Bonus
               </th>
            </tr>
         </thead>

         <tbody>
            {#each Object.keys($document.system.skills.combat) as skill}
               {#if skill !== "dodge" && skill !== "parry"}
                  <tr>
                     <th class="bg-gradient-to-r from-white to-table-name px-1.5 py-0 text-right font-medium font-condensed">
                        {localize(`EDRPG.sheet.skills.combat.${skill}.name`)}
                     </th>

                     <td class="bg-table-cell border-border p-0 text-center">
                        <input
                           type="number"
                           readonly
                           value={$document.system.skills.combat[skill].value}
                           class="bg-transparent w-full h-full"
                        />
                     </td>

                     <td class="bg-table-cell border-border p-0 text-center">
                        <input
                           type="number"
                           readonly
                           value={$document.system.skills.combat[skill].bonus}
                           class="bg-transparent w-full h-full"
                        />
                     </td>
                  </tr>
               {/if}
            {/each}
         </tbody>
      </table>
   </div>

   <div>
      <h2
         class="bg-gradient-to-r from-section-begin to-section-end px-1.5 py-0.5 text-white text-base uppercase font-expanded
                [clip-path:polygon(0_0,50%_0,55%_66.7%,97.5%_66.7%,100%_100%,0_100%)]"
      >
         Combat Statistics
      </h2>

      <table class="bg-transparent m-0 border-separate border-spacing-1 w-full">
         <tbody>
            <tr>
               <th class="bg-gradient-to-r from-white to-table-name px-1.5 py-1 text-right font-medium font-condensed">
                  Dodge
               </th>
               <td class="bg-table-cell border-border p-0 text-center">
                  <input
                     type="number"
                     readonly
                     value={$document.system.skills.combat.dodge.bonus}
                     class="bg-transparent w-full h-full"
                  />
               </td>
            </tr>

            <tr>
               <th class="bg-gradient-to-r from-white to-table-name px-1.5 py-1 text-right font-medium font-condensed">
                  Parry
               </th>
               <td class="bg-table-cell border-border p-0 text-center">
                  <input
                     type="number"
                     readonly
                     value={$document.system.skills.combat.parry.bonus}
                     class="bg-transparent w-full h-full"
                  />
               </td>
            </tr>

            <tr>
               <th class="bg-gradient-to-r from-white to-table-name px-1.5 py-1 text-right font-medium font-condensed">
                  Initiative
               </th>
               <td class="bg-table-cell border-border p-0 text-center">
                  <input
                     type="number"
                     readonly
                     value={$document.system.initiative}
                     class="bg-transparent w-full h-full"
                  />
               </td>
            </tr>

            <tr>
               <th class="bg-gradient-to-r from-white to-table-name px-1.5 py-1 text-right font-medium font-condensed">
                  Endurance
               </th>
               <td class="bg-table-cell border-border p-0 text-center">
                  <input
                     type="number"
                     readonly
                     value={$document.system.endurance.value}
                     class="bg-transparent w-full h-full"
                  />
               </td>
            </tr>
         </tbody>
      </table>
   </div>

</div>
