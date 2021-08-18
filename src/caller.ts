import Openwhisk from "openwhisk"
import * as $ from "zod"

const validator = $.object({
  target_action_name: $.string(),
})

const main = async (params: unknown) => {
  const validated = validator.safeParse(params)
  if (validated.success === false) {
    console.error(`Bad argument: ${JSON.stringify(validated.error)}`)
    return
  }
  const ow = Openwhisk()
  const r = await ow.actions.invoke({
    name: validated.data.target_action_name,
    blocking: false,
    params: {
      message: "Call from caller",
    },
  })
  console.info(r.activationId)
}

exports.main = main
