export const Mapbox = () => {
  return {
    ACCESS_TOKEN:
      "pk.eyJ1Ijoicm9nZXItYW5nZWwiLCJhIjoiY2xoaWg0dG1zMDdvNDNrdXBrcmRpeXZ6dSJ9.ZjwjkGknnSuoIvW2MjZlkA",
  };
};

const url = `https://script.google.com/macros/s/AKfycbynkre2L9w__0V-fL9hrDB7NnFLwI_MzLdcWfYav1Bv0pHpR3_hYjv1DPYbY5Znp5Vj0g/exec`;

const Gapp = {
  connect: {
    send: async (object) => {
      try {
        await fetch(url, {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          body: JSON.stringify(object),
        });
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    receive: async () => {
      try {
        const init = await fetch(url, {
          method: "GET",
          redirect: "follow",
        });
        const parse = JSON.parse(await init.text());
        return parse[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default Gapp;
