import { PlayerUI } from "@/components/player";

export default function HomePage() {
  return (
    <div className="pt-48 w-full flex justify-center items-center  ">
      <PlayerUI src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4" />
    </div>
  );
}
