export default class EquipmentData extends foundry.abstract.TypeDataModel {
   static defineSchema() {
      const fields = foundry.data.fields;

      return {
         category: new fields.StringField({
            required: true,
            initial: "equipment1",
         }),

         source: new fields.StringField({
            initial: "Core",
         }),

         description: new fields.StringField({
            initial: "",
         }),

         quantity: new fields.NumberField({
            required: true,
            integer: true,
            min: 0,
            initial: 1,
         }),

         price: new fields.NumberField({
            required: true,
            min: 0,
            initial: 0,
         }),

         weight: new fields.NumberField({
            required: true,
            min: 0,
            initial: 0,
         }),

         weaponType: new fields.StringField({
            initial: "",
         }),

         damage: new fields.StringField({
            initial: "",
         }),

         ammo: new fields.StringField({
            initial: "",
         }),

         rangeShort: new fields.SchemaField({
            distance: new fields.NumberField({
               required: true,
               min: 0,
               initial: 0,
            }),

            modifier: new fields.NumberField({
               required: true,
               integer: true,
               initial: 0,
            }),
         }),

         rangeMedium: new fields.SchemaField({
            distance: new fields.NumberField({
               required: true,
               min: 0,
               initial: 0,
            }),

            modifier: new fields.NumberField({
               required: true,
               integer: true,
               initial: 0,
            }),
         }),

         rangeLong: new fields.SchemaField({
            distance: new fields.NumberField({
               required: true,
               min: 0,
               initial: 0,
            }),

            modifier: new fields.NumberField({
               required: true,
               integer: true,
               initial: 0,
            }),
         }),

         notes: new fields.StringField({
            initial: "",
         }),
      };
   }
}