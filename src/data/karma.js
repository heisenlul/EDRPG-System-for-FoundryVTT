export default class KarmaCapabilityData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;

      return {
         description: new fields.StringField({ initial: "" }),
         cost: new fields.NumberField({
            required: true,
            integer: true,
            min: 0,
            initial: 1,
         }),
         category: new fields.StringField({ initial: "" }),
      };
   }
}
