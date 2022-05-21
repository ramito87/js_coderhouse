"use strict";

window.addEventListener("load", function () {
  console.log("DOM cargado");

  function carga_fabricantes() {
    const fabricantes = [
      {
        text: "Microsoft",
        value: "microsoft",
      },
      {
        text: "Nintendo",
        value: "nintendo",
      },
      {
        text: "Sony",
        value: "sony",
      },
    ];

    const selectBox = document.querySelector("#fabricante");

    for (const f of fabricantes) {
      const { text, value, selected } = f;
      selectBox.options.add(new Option(text, value, selected, selected));
    }

    selectBox.addEventListener("click", () => {
      console.log("cambio seleccion");
      let fabricante = selectBox.value;
      console.log(fabricante);

      switch (fabricante) {
        case "nintendo":
          var consolas = [
            {
              text: "Switch",
              value: "switch",
            },
            {
              text: "Wii U",
              value: "wiiu",
            },
            {
              text: "Wii",
              value: "wii",
            },
          ];
      
          var selectCons = document.querySelector("#consola");
      
          for (const c of consolas) {
            var { text, value, selected } = c;
            selectCons.options.add(new Option(text, value, selected, selected));
          }
          break;
        case "microsoft":
          var consolas = [
            {
              text: "X-Box 360",
              value: "360",
            },
            {
              text: "X-Box One",
              value: "one",
            },
            {
              text: "X-Box S",
              value: "s",
            },
          ];
      
          var selectCons = document.querySelector("#consola");
      
          for (const c of consolas) {
            var { text, value, selected } = c;
            selectCons.options.add(new Option(text, value, selected, selected));
          }
          break;
        
        case "sony":
          var consolas = [
            {
              text: "Play Station 5",
              value: "play5",
            },
            {
              text: "Play Station 4",
              value: "play4",
            },
            {
              text: "Play Station 3",
              value: "play3",
            },
          ];
      
          var selectCons = document.querySelector("#consola");
      
          for (const c of consolas) {
            var { text, value, selected } = c;
            selectCons.options.add(new Option(text, value, selected, selected));
          }
          break;
      }
    });
    return false;
  }

  carga_fabricantes();
});
