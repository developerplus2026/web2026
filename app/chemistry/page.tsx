import { PlayerUI } from "@/components/player";

export default function HomePage() {
  return (
    <div className="mt-24 ">
      <PlayerUI src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4" />
    </div>
  );
}
