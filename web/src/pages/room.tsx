import { Navigate, useParams } from 'react-router-dom'

type RoomParms = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParms>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return <div>Room Details {JSON.stringify(params)}</div>
}
