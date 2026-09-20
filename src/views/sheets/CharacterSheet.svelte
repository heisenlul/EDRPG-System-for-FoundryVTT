<svelte:options accessors={true} />

<script>
   import { localize } from "#runtime/svelte/helper";

   import SheetImage from "../components/SheetImage.svelte";
   import NameField from "../components/NameField.svelte";
   import CharacterDetailField from "../components/CharacterDetailField.svelte";
   import RankField from "../components/RankField.svelte";
   import HeaderBlockField from "../components/HeaderBlockField.svelte";
   import CharacterSkillsTab from "../tabs/CharacterSkillsTab.svelte";
   import CharacterBackgroundsKarmaTab from "../tabs/CharacterBackgroundsKarmaTab.svelte";
   import CharacterProfessionsTab from "../tabs/CharacterProfessionsTab.svelte";
   import CharacterEnhancementsTab from "../tabs/CharacterEnhancementsTab.svelte";
   import CharacterSpecialAbilitiesTab from "../tabs/CharacterSpecialAbilitiesTab.svelte";
   import CharacterCombatTab from "../tabs/CharacterCombatTab.svelte";

   /** @type {import('#runtime/svelte/store/fvtt/document').TJSDocument} */
   export let document;
</script>

<main class="bg-white">
   <header class="grid grid-cols-6 gap-4">
      <div class="row-span-2 w-32">
         <SheetImage {document} />
      </div>
      <div class="col-span-4">
         <NameField {document} />
      </div>
      <div class="row-span-2">
         <RankField {document} />
      </div>
      <CharacterDetailField {document} field="gender" />
      <CharacterDetailField {document} field="age" />
      <CharacterDetailField {document} field="height" />
      <CharacterDetailField {document} field="weight" />
      <HeaderBlockField
         {document}
         field="dodge"
         readonly
         direction="left"
         titleColor={{ start: "section-begin", end: "section-end" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="initiative"
         readonly
         direction="center"
         titleColor={{ start: "section-begin", end: "section-end" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="parry"
         readonly
         direction="right"
         titleColor={{ start: "section-end", end: "section-begin" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="karma.standard"
         max={$document.system.rank.karmaPoints}
         direction="left"
         borderColor="karma-table"
         titleColor={{ start: "karma-begin", end: "karma-end" }}
         contentColor={{ start: "karma-notes", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="karma.cyber"
         max={$document.system.rank.karmaPoints}
         direction="center"
         borderColor="karma-table"
         titleColor={{ start: "karma-begin", end: "karma-end" }}
         contentColor={{ start: "karma-notes", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="endurance"
         max={$document.system.rank.endurance}
         direction="right"
         titleColor={{ start: "endurance-begin", end: "endurance-end" }}
         contentColor={{ start: "endurance-notes", end: "white" }}
      />
   </header>
   <section id="tab-sections">
      <nav class="tabs bg-gradient-to-r from-white to-table-name border-y my-4 font-bold">
         <a class="item px-2.5 py-1 w-full" data-tab="main">{localize("EDRPG.sheet.tabs.main")}</a>
         <a class="item px-2.5 py-1 w-full" data-tab="skills">{localize("EDRPG.sheet.tabs.skills")}</a>
         <a class="item px-2.5 py-1 w-full" data-tab="backgrounds-karma">{localize("EDRPG.sheet.tabs.bgKarma")}</a>
         <a class="item px-2.5 py-1 w-full" data-tab="professions">Professions</a>
         <a class="item px-2.5 py-1 w-full" data-tab="special-abilities">
            Special Abilities
         </a>
         <a class="item px-2.5 py-1 w-full" data-tab="enhancements">
            Enhancements
         </a>
         <a class="item px-2.5 py-1 w-full" data-tab="combat">{localize("EDRPG.sheet.tabs.combat")}</a>
         <a class="item px-2.5 py-1 w-full" data-tab="equipment">{localize("EDRPG.sheet.tabs.equipment")}</a>
      </nav>
      <section class="tab-content">
         <div class="tab" data-tab="main">
   <div class="p-4 space-y-6">

      <!-- Backgrounds -->
      <section>
         <h2 class="text-xl font-bold mb-3">
            Backgrounds
         </h2>

         {#if $document.itemTypes?.background?.length > 0}
            <div class="space-y-2">
               {#each $document.itemTypes.background as background}
                  <div class="border rounded p-3">
                     <h3 class="font-bold">
                        {background.name}
                     </h3>

                     {#if background.system.enhancement}
                        <p class="text-sm mt-1">
                           <strong>Enhancement:</strong>
                           {background.system.enhancement}
                        </p>
                     {/if}
                  </div>
               {/each}
            </div>
         {:else}
            <p class="text-sm">
               No tienes Backgrounds seleccionados.
            </p>
         {/if}
      </section>


      <!-- Professions -->
      <section>
         <h2 class="text-xl font-bold mb-3">
            Professions
         </h2>

         {#if $document.itemTypes?.profession?.length > 0}
            <div class="space-y-2">
               {#each $document.itemTypes.profession as profession}
                  <div class="border rounded p-3">
                     <h3 class="font-bold">
                        {profession.name}
                     </h3>

                     {#if profession.system.effect}
                        <p class="text-sm mt-1">
                           <strong>Effect:</strong>
                           {profession.system.effect}
                        </p>
                     {/if}
                  </div>
               {/each}
            </div>
         {:else}
            <p class="text-sm">
               No tienes Professions seleccionadas.
            </p>
         {/if}
      </section>


      <!-- Special Abilities -->
      <section>
         <h2 class="text-xl font-bold mb-3">
            Special Abilities
         </h2>

         {#if $document.itemTypes?.specialAbility?.length > 0}
            <div class="space-y-2">
               {#each $document.itemTypes.specialAbility as ability}
                  <div class="border rounded p-3">
                     <h3 class="font-bold">
                        {ability.name}
                     </h3>

                     {#if ability.system.effect}
                        <p class="text-sm mt-1">
                           <strong>Effect:</strong>
                           {ability.system.effect}
                        </p>
                     {/if}

                     {#if ability.system.disadvantage}
                        <p class="text-sm mt-1">
                           <strong>Disadvantage:</strong>
                           {ability.system.disadvantage}
                        </p>
                     {/if}
                  </div>
               {/each}
            </div>
         {:else}
            <p class="text-sm">
               No tienes Special Abilities seleccionadas.
            </p>
         {/if}

      </section>
   <!-- Enhancements -->
<section>
   <h2 class="text-xl font-bold mb-3">
      Enhancements
   </h2>

   {#if $document.itemTypes?.enhancement?.length > 0}
      <div class="space-y-2">
         {#each $document.itemTypes.enhancement as enhancement}
            <div class="border rounded p-3">
               <h3 class="font-bold">
                  {enhancement.name}
               </h3>

               {#if enhancement.system.description}
                  <p class="text-sm mt-1">
                     {enhancement.system.description}
                  </p>
               {/if}

               {#if enhancement.system.effect}
                  <p class="text-sm mt-1">
                     <strong>Effect:</strong>
                     {enhancement.system.effect}
                  </p>
               {/if}
            </div>
         {/each}
      </div>
   {:else}
      <p class="text-sm">
         No tienes Enhancements seleccionados.
      </p>
   {/if}
</section>

   </div>
</div>
         <div class="tab" data-tab="skills"><CharacterSkillsTab {document} /></div>
         <div class="tab" data-tab="backgrounds-karma">
           <CharacterBackgroundsKarmaTab {document} />
         </div>
         <div class="tab" data-tab="professions">
            <CharacterProfessionsTab {document} />
         </div>
         <div class="tab" data-tab="special-abilities">
            <CharacterSpecialAbilitiesTab {document} />
         </div>
         <div class="tab" data-tab="enhancements">
            <CharacterEnhancementsTab {document} />
         </div>
         <div class="tab" data-tab="combat">
   		<CharacterCombatTab {document} />
	</div>
         <div class="tab" data-tab="equipment"></div>
      </section>
   </section>
</main>
