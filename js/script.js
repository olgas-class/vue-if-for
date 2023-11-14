const { createApp } = Vue;

createApp({
  data() {
    return {
      awesome: false,
      myNumber: 5,
      // names: ["Luca", "Maria", "Giovanni"],
      names: [],
      student: {
        name: "Pippo",
        lastname: "Bianchi",
        age: 26,
      },
      studentsArray: [
        {
          name: "Olga",
          lastname: "Demina",
          age: 36,
        },
        {
          name: "Mario",
          lastname: "Rossi",
          age: 32,
        },
        {
          name: "Giovanni",
          lastname: "Verdi",
          age: 36,
        },
      ],
      activeIndex: 1
    };
  },
  methods: {},
}).mount("#app");
