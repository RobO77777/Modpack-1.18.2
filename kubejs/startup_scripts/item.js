// Listen to item registry event
onEvent('item.registry', event => {


    event.create('silicon_ingot').displayName('Silicon Ingot')
    event.create('silicon_sheet').displayName('Silicon sheet')

    event.create('steel_sheet').displayName('Steel sheet')
    event.create('steel_wire').displayName('Steel wire')
    event.create('steel_rod').displayName('Steel rod')

    event.create('silicon_carbide').displayName('Silicon Carbide')
    event.create('silicon_carbide_plate').displayName('Silicon Carbide Plate')


    
    event.create('cement').displayName('Cement')

    //items ordi
    event.create('processor').displayName('Basic Processor')

    event.create('processor_advanced').displayName('Advanced Processor')

    event.create('processor_elite').displayName('Elite Processor')

    event.create('processor_ultimate').displayName('Ultimate Processor')

    //molten raw ore

    event.create('crushed_raw_cobalt').displayName('Crushed Cobalt Ore')
    event.create('crushed_raw_elementium').displayName('Crushed Elementium Ore')

    //dust

    event.create('dust_silicon').displayName('Silicon Dust')
    event.create('dust_zinc').displayName('Zinc Dust')
    event.create('dust_silver').displayName('Silver Dust')
    event.create('dust_elementium').displayName('Elementium Dust')
    event.create('dust_cobalt').displayName('Cobalt Dust')

    //raw

    event.create('raw_silver').displayName('Raw Silver')

  })