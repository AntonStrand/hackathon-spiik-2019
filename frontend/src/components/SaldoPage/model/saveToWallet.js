import * as Future from 'fluture'

const post = (url, body) =>
  Future.encaseP(fetch)(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).chain(response =>
    response.ok ? Future.of(response) : Future.reject(response)
  )

// saveToWallet :: (ChildID, Number) -> Future Error Response
const saveToWallet = (childID, saldo) =>
  post(`/api/child/${childID}`, { saldo })

export default saveToWallet
