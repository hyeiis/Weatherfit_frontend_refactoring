import NavBarBox from './NavBarBox'

export default function NavBar() {
  return (
    <div
      className="fixed bottom-[45px] mx-[5px] flex justify-around items-center bg-white w-[360px] border border-black rounded-[30px] z-10 py-[5px]"
      style={{ boxShadow: '7px 7px 1px' }}>
      <NavBarBox iconStyle="HOME" title="홈" url="/" />
      <NavBarBox iconStyle="SEARCH" title="구경" url="/feed" />
      <NavBarBox iconStyle="UPLOAD" title="업로드" url="/upload" />
      <NavBarBox iconStyle="MY_PROFILE" title="마이페이지" url="/mypage" />
    </div>
  )
}
