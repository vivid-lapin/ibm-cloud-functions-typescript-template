import axios from "axios"
import * as $ from "zod"

const validator = $.object({
  webhookUrl: $.string(),
})

const main = async (params: unknown) => {
  const validated = validator.safeParse(params)
  if (validated.success === false) {
    console.error(`Bad argument: ${JSON.stringify(validated.error)}`)
    return
  }
  await axios.post(validated.data.webhookUrl, {
    content: new Date().getTime().toString(),
  })
}

exports.main = main
