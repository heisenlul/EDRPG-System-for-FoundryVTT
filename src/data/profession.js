export default class ProfessionData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;

      return {
         description: new fields.StringField({
            initial: "",
         }),

         requirements: new fields.JSONField({
            initial: [],
         }),

         effect: new fields.StringField({
            initial: "",
         }),

         free: new fields.BooleanField({
            initial: false,
         }),
      };
   }
}