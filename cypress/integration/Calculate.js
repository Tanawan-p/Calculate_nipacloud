describe('Calculate', () => {
    it('TC_05 ตรวจสอบการแสดงผลเมื่อต้องการบวกตัวเลข', () => {
      cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
      //click First number
      cy.get('#number1Field').click()
      cy.get('#number1Field').type('5')
      //click Second number
      cy.get('#number2Field').click()
      cy.get('#number2Field').type('5')
      //click calculate
      cy.get('#calculateButton').click()
      cy.pause()
      //click clear
      cy.get('#clearButton').click()
    })
    it('TC_06 ตรวจสอบการแสดงผลเมื่อต้องการลบตัวเลข', () => {
      //click First number
      cy.get('#number1Field').click()
      cy.get('#number1Field').type('{backspace}5')
      //click Second number
      cy.get('#number2Field').click()
      cy.get('#number2Field').type('{backspace}5')
      //select Operation
      cy.get('#selectOperationDropdown').select('1')
      //click calculate
      cy.get('#calculateButton').click()
      cy.pause()
    })
    it('TC_07 ตรวจสอบการแสดงผลเมื่อต้องการคูณตัวเลข', () => {
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_08 ตรวจสอบการแสดงผลเมื่อต้องการหารตัวเลข', () => {
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_32 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ เมื่อทำการ Build ชุดที่ 1 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_33 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ เมื่อทำการ Build ชุดที่ 2 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('2')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_34 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ เมื่อทำการ Build ชุดที่ 3 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('3')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_35 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ เมื่อทำการ Build ชุดที่ 4 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('4')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_36 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 5 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('5')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_37 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 6 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('6')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_38 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 7 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('7')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_39 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 8 และทำการบวกตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('8')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}5')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_40 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        //uncheckbox 
        cy.get('#integerSelect').click()
        cy.pause()
    })
    it('TC_41 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 2 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('2')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_42 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 3 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('3')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_43 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 4 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('4')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_44 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 5 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('5')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_45 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 6 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('6')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_46 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 7 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('7')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_47 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 8 และทำการลบตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('8')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}99')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}45')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_48 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        //uncheckbox 
        cy.get('#integerSelect').click()
        cy.pause()
    })
    it('TC_49 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 2 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('2')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_50 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 3 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('3')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_51 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 4 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('4')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_52 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 5 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('5')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_53 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 6 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('6')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_54 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 7 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('7')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_55 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 8 และทำการคูณตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('8')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}12')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}5')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_56 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        //uncheckbox 
        cy.get('#integerSelect').click()
        cy.pause()
    })
    it('TC_57 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 2 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('2')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_58 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 3 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('3')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_59 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 4 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('4')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_60 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 5 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('5')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_61 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 6 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('6')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_62 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 7 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('7')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_63 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 8 และทำการหารตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('8')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}50')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}6')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_64 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการบวกด้วยตัวอักษร', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}Test')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}Test')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        //uncheckbox 
        cy.get('#integerSelect').click()
        cy.pause()
    })
    it('TC_65 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการลบด้วยตัวอักษร', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_66 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการคูณด้วยตัวอักษร', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_67 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการหารด้วยตัวอักษร', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}Test')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_68 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการบวกด้วยตัวอักษรและตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}Test01')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}Test01')
        //select Operation
        cy.get('#selectOperationDropdown').select('0')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_69 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการลบด้วยตัวอักษรและตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //select Operation
        cy.get('#selectOperationDropdown').select('1')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_70 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการคูณด้วยตัวอักษรและตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //select Operation
        cy.get('#selectOperationDropdown').select('2')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
    it('TC_71 ตรวจสอบการแสดงผลหน้าเว็บ TestSheepNZ  เมื่อทำการ Build ชุดที่ 1 และทำการหารด้วยตัวอักษรและตัวเลข', () => {
        //select Build
        cy.get('#selectBuild').select('1')
        //click First number
        cy.get('#number1Field').click()
        cy.get('#number1Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //click Second number
        cy.get('#number2Field').click()
        cy.get('#number2Field').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}Test01')
        //select Operation
        cy.get('#selectOperationDropdown').select('3')
        //click calculate
        cy.get('#calculateButton').click()
        cy.pause()
    })
  })
