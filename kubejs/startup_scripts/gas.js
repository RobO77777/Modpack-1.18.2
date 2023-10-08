const $EventBuses = java('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = java('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = java('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = java('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

// const GASES = new $GasDeferredRegister('kubejs')
// const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

INFUSETYPE.register('silicon', 0x717171)


// GASES.register($EventBuses.getModEventBus('kubejs').get())
// SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())