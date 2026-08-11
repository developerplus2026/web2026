import { PlayerUI } from "@/components/player";

export default function HomePage() {
  return (
    <div className="pt-38 w-full flex flex-col justify-center items-center  ">
      <PlayerUI src="https://vercel-player-six.vercel.app/play?v=019f453bd02d7ed8832017c94caa5a91&k=2026%2F03%2F11%2Fresources%2Fvideo%2Fph_n_1.1___l__thuy_t_v__d____t1_a1_1773199405700623643215.mp4" />
      <PlayerUI src="https://vercel-player-six.vercel.app/play?v=019f453bd06c7f37812a2f3fc980f984&k=2026%2F03%2F21%2Fresources%2Fvideo%2Fph_n_1___l__thuy_t___t1_a2_1774111110884474495754.mp4" />
    </div>
  );
}
