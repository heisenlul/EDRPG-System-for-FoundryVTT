import { TJSGameSettings } from "#runtime/svelte/store/fvtt/settings";
import * as EDRPG from "./system/game.js";
import EDSettings from "./system/settings.js";
import EDActor from "./actor.js";
import EDCharacter from "./data/character.js";
import BackgroundData from "./data/background.js";
import ProfessionData from "./data/profession.js";
import KarmaCapabilityData from "./data/karma.js";
import SpecialAbilityData from "./data/specialAbility.js";
import EnhancementData from "./data/enhancement.js";
import EDSheetCharacter from "./sheets/character.js";
import "../styles/index.css";

/**
 * @typedef {object} Game
 *
 * @augments Game
 *
 * @property {EDRPG} edrpg
 */

Hooks.once("init", async () => {
   const settings = new TJSGameSettings("edrpg");
   settings.registerAll(EDSettings, false);

   CONFIG.Item.typeLabels.profession = "TYPES.Item.profession";
   CONFIG.Item.typeLabels.specialAbility = "TYPES.Item.specialAbility";
   CONFIG.Actor.documentClass = EDActor;
   CONFIG.Item.dataModels.background = BackgroundData;
   CONFIG.Item.dataModels.profession = ProfessionData;
   CONFIG.Item.dataModels.enhancement = EnhancementData;
   CONFIG.Item.dataModels.specialAbility = SpecialAbilityData;
   CONFIG.Item.dataModels.karma = KarmaCapabilityData;
   CONFIG.Actor.dataModels.character = EDCharacter;
   /*
   CONFIG.Actor.dataModels.npcIndividual = NPCIndividualData;

   CONFIG.Item.documentClass = EDItem;
   CONFIG.Item.dataModels.karma = KarmaCapabilityData;
   CONFIG.Item.dataModels.background = BackgroundData;
   CONFIG.Item.dataModels.enhancement = EDItemData;
   */

   Actors.unregisterSheet("core", ActorSheet);
   Actors.registerSheet("edrpg", EDSheetCharacter, {
      types: ["character"],
      makeDefault: true,
   });
   /*
   Actors.registerSheet("edrpg", EDActorSheetNPCIndividual, {
      types: ["npcIndividual"],
      makeDefault: true,
   });

   Items.unregisterSheet("core", ItemSheet);
   Items.registerSheet("edrpg", EDItemSheet, {
      types: ["enhancement"],
      makeDefault: true,
   });
   Items.registerSheet("edrpg", EDItemSheetBackground, {
      types: ["background"],
      makeDefault: true,
   });
   Items.registerSheet("edrpg", EDItemSheetKarma, {
      types: ["karma"],
      makeDefault: true,
   });
   */

   game.edrpg = EDRPG;
});
