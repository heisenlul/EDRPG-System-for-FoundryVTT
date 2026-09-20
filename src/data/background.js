export default class BackgroundData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;

      return {
         description: new fields.StringField({ initial: "" }),

         choices: new fields.NumberField({
            required: true,
            integer: true,
            min: 1,
            initial: 1,
         }),

         enhancement: new fields.StringField({
            initial: "",
         }),

         skills: new fields.ArrayField(
            new fields.SchemaField({
               category: new fields.StringField({ initial: "" }),
               skill: new fields.StringField({ initial: "" }),
               bonus: new fields.NumberField({
                  required: true,
                  integer: true,
                  initial: 0,
               }),
            }),
         ),
      };
   }
}