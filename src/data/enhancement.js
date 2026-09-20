export default class EnhancementData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;

      return {
         description: new fields.StringField({ initial: "" }),
         effect: new fields.StringField({ initial: "" }),
         source: new fields.StringField({ initial: "" }),
      };
   }
}