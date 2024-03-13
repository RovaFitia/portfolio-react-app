import { Page, Document, View, Text } from '@react-pdf/renderer';

const MyDocument = ()=> {
    <Document>
        <Page size="A4">
            <View>
                <Text>Hello wolrd</Text>
            </View>
        </Page>
    </Document>
}

export default MyDocument ;