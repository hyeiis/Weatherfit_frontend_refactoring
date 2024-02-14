import PostCount from './PostCount'

interface IMAGE {
  boardId: number
  imageId: number
  imageUrl: string
}

interface LIKE {
  likeId: number
  nickName: string
}
interface FEEDATA {
  boardId: number
  images: IMAGE
  likeCount: number
  likelist: LIKE[]
  nickName: string
  temperature: number
  weather: string
  weatherIcon?: string
}

interface UserData {
  nickname: string
  name: string
  email: string
  pw: string
}

interface Props {
  profileImage: string | null
  userInfo: UserData
  myPost: FEEDATA[]
  myLikePost: FEEDATA[]
}

export default function ProfileInfo({
  profileImage,
  userInfo,
  myPost,
  myLikePost,
}: Props) {
  return (
    <div className="flex items-center justify-evenly my-[10px]">
      <div className="flex items-center flex-col font-Cafe24SsurroundAir">
        <div className="bg-[black] h-[80px] rounded-[50%] w-[80px]"></div>
        <p className="font-bold">깜찍이</p>
        {/* <div className="bg-[black] h-[80px] rounded-[50%] w-[80px]"></div>
        <p className="font-bold">{userInfo.nickname}</p> */}
      </div>
      {/* -------------------------------지우기 */}
      <div className="flex items-center flex-col font-Cafe24SsurroundAir text-sm">
        <p className="font-bold">내 게시물</p>
        <p>{myPost.length}</p>
      </div>
      <div className="flex items-center flex-col font-Cafe24SsurroundAir text-sm">
        <p className="font-bold">좋아요 한 게시물</p>
        <p>{myLikePost.length}</p>
      </div>
      {/* -------------------------------------- */}
      {/* <PostCount title="내 게시물" count={myPost.length} />
      <PostCount title="좋아요 한 게시물" count={myLikePost.length} /> */}
    </div>
  )
}
