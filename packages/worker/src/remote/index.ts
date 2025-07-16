const { DMR_URL = "", VCR_URL = "" } = process.env;

export const remote = async (url = "") => {
  console.log(["remote"], { url });

  await Promise.all([
    DMR_URL &&
      fetch(DMR_URL)
        .then((res) => res.ok)
        .catch(() => false),
    VCR_URL && fetch(`${VCR_URL}/getStatus`).then((res) => res.json()),
  ]).then(async ([tvOn, status]) => {
    const { power, input, volume, max_volume, ...rest } = status || {};
    console.log({ tvOn, power, input, volume, max_volume, rest });

    let setPower = undefined;
    if (["optical1"].includes(input) && ["standby"].includes(power) && tvOn) {
      console.log(["powerOn"]);
      setPower = true;
    } else if (
      ["optical1"].includes(input) &&
      ["on"].includes(power) &&
      !tvOn
    ) {
      console.log(["standBy"]);
      setPower = false;
    }
    const setVolume = 140;
    if (volume !== setVolume) {
      VCR_URL &&
        (await fetch(`${VCR_URL}/setVolume?volume=${setVolume}`).then((res) =>
          res.json(),
        ));
    }
    if (setPower !== undefined) {
      VCR_URL &&
        (await fetch(
          `${VCR_URL}/setPower?power=${setPower ? "on" : "standby"}`,
        ).then((res) => res.json()));
    }
  });
};
