import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center rounded-2xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about RAM?</h2>
        <p className="text-gray-500 my-2">
          Checkout the link below to learn more about it
        </p>
        <Button gradientDuoTone="purpleToPink">Learn More</Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://cdn.vox-cdn.com/thumbor/ChC3ttDapb0tvkD4uoxMi9f67N4=/0x0:1584x891/920x613/filters:focal(841x310:1093x562):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71950445/rick_and_morty_s4_image.0.png" />
      </div>
    </div>
  );
}
