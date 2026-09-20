import fromPairs from "lodash/fromPairs";
import mapValues from "lodash/mapValues";

import EDSkill from "./skill.js";
import EDMeter from "./meter.js";

export default class CharacterData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;
      const requiredInteger = { required: true, nullable: false, integer: true };

      return {
         gender: new fields.StringField(),
         height: new fields.StringField(),
         weight: new fields.StringField(),
         age: new fields.NumberField({ ...requiredInteger, initial: 0 }),

         bodyType: new fields.StringField({
            initial: "human",
         }),

         rankPoints: new fields.NumberField({ ...requiredInteger, initial: 0 }),
         karma: new fields.SchemaField({
            standard: new fields.EmbeddedDataField(EDMeter),
            cyber: new fields.EmbeddedDataField(EDMeter),
         }),
         endurance: new fields.EmbeddedDataField(EDMeter),
         skills: new fields.SchemaField(
            mapValues(
               game.edrpg.skills,
               (category) =>
                  new fields.SchemaField(
                     fromPairs(
                        category.map((skill) => [
                           skill,
                           new fields.EmbeddedDataField(EDSkill),
                        ]),
                     ),
                  ),
            ),
         ),
      };
   }

   /**
    * Get the current rank of the character from its rank points.
    *
    * @returns Rank
    */
   get rank() {
      return game.edrpg.ranks.find((rank) => this.rankPoints <= rank.maxRankPoints);
   }

   get karmaCapabilityLimit() {
   const rankIndex = game.edrpg.ranks.indexOf(this.rank);
   return 3 + rankIndex;
   }
   get initiative() {
      return this.skills.intelligence.tactics.bonus;
   }

   get dodge() {
      return this.skills.combat.dodge.bonus;
   }

   get parry() {
      return this.skills.combat.parry.bonus;
   }

prepareDerivedData() {
   const rank = this.rank;

   this.karma.standard.max = rank.karmaPoints;
   this.karma.cyber.max = rank.karmaPoints;
   this.endurance.max = rank.endurance;

   // Reset skill minimums to their base value
   for (const category of Object.values(this.skills)) {
   for (const skill of Object.values(category)) {
      skill.min = skill.baseMin;
   }
}

   // Background bonuses
   for (const background of this.parent.itemTypes.background) {
      background.system.skills
         .filter((mod) => mod.category && mod.skill)
         .forEach((mod) => {
            const skill = this.skills[mod.category]?.[mod.skill];

            if (skill) {
               skill.min += mod.bonus;
            }
         });
   }
}
}
