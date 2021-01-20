import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import download from 'downloadjs'

import Termo from '@/assets/termo.json'

const makePdf = async (data: any) => {
    const pdfDoc = await PDFDocument.load(Termo.pdf)

    const font = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
    const fontBytes = await fetch(font).then((res) => res.arrayBuffer())

    pdfDoc.registerFontkit(fontkit)

    const customFont = await pdfDoc.embedFont(fontBytes)

    const form = pdfDoc.getForm()

    http://db.onlinewebfonts.com/t/8984ea7fcbebdcfe77fbbc1b86e7cfe6.ttf

    // Image
    if (data.image) {
        const image = await data.image.arrayBuffer()
        const embedImage = await pdfDoc.embedJpg(image)
        const imageButton = form.getButton('Button1')
        imageButton.setImage(embedImage)
    }

    // Animal
    const AnimalName = form.getTextField('Text10')
    AnimalName.setText(data.animal.name)

    const Specie = form.getTextField('Text11')
    Specie.setText(data.animal.specie.join())

    const Age = form.getTextField('Text12')
    Age.setText(data.animal.age)

    const Microchip = form.getTextField('Text13')
    Microchip.setText(data.animal.microchip)

    const Coat = form.getTextField('Text14')
    Coat.setText(data.animal.coat)

    if (data.animal.weight) {
        const Weight = form.getTextField('Text24')
        Weight.setText(data.animal.weight + 'Kg')
    }

    const Features = form.getTextField('Text15')
    Features.setText(data.animal.features)

    const Gender = await data.animal.gender.join()
    switch (Gender) {
        case 'male':
            form.getCheckBox('Button2').check()
            break
        case 'female':
            form.getCheckBox('Button7').check()
            break
    }

    const Sterilized = await data.animal.sterilized.join()
    switch (Sterilized) {
        case 'true':
            form.getCheckBox('').check()
            break
        case 'false':
            form.getCheckBox('').check()
            break
    }

    // Person
    const PersonName = form.getTextField('Text16')
    PersonName.setText(data.person.name)

    const Birthday = form.getTextField('Text17')
    const BirthdayFormatted = await data.person.birthday.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
    Birthday.setText(BirthdayFormatted)

    const Rg = form.getTextField('Text18')
    Rg.setText(data.person.rg)

    const Cpf = form.getTextField('Text19')
    const CpfFormatted = await data.person.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    Cpf.setText(CpfFormatted)

    const Address = form.getTextField('Text20')
    Address.setText(data.person.address)

    const Number = form.getTextField('Text21')
    Number.setText(data.person.number)

    const Neighborhood = form.getTextField('Text22')
    Neighborhood.setText(data.person.neighborhood)

    const Phone = form.getTextField('Text23')
    Phone.setText(data.person.phone)

    const Ficha = form.getTextField('Text2')
    Ficha.setText(data.ficha + '/' + new Date().getFullYear())

    const pdfBytes = await pdfDoc.save()

    download(pdfBytes, data.ficha + '.pdf', 'application/pdf');
}

export default makePdf
