import axios from 'axios'

const responseMessage = async (message, callback) => {
  
  const dialogFlowURL = `https://api.dialogflow.com/v1/query?v=20170712&query=${message}&lang=en&sessionId=791fccc0-8a30-3d7d-c790-e00aecdb47a8`
  const authToken = "Bearer ".concat(process.env.DIALOG_FLOW_CLIENT_TOKEN)
  const options = {
    headers: {
      authorization: authToken
    }
  }

  try {
    const response = await axios.get(dialogFlowURL, options)
    callback(response.data.result.fulfillment.speech, null)
  } catch (error) {
    callback(null, error)
  }
}

export default responseMessage

