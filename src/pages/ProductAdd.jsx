import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  FormField,
  Grid,
  Label,
} from "semantic-ui-react";
import axios from "axios";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    productBrand: "",
    productDetails: "",
    productPrice: "",
    stock: "",
    productImageUrl: "",
  };

  const schema = Yup.object({
    productName: Yup.string().required("Urun adi bos birakilamaz!"),
    productPrice: Yup.number().required("Urun fiyati zorunludur!"),
    productBrand: Yup.string().required("Marka alani bos birakilamaz!"),
    stock: Yup.number().required("Fiyat alani bos birakilamaz!"),
    productImageUrl: Yup.string().required("Urun gorseli bos birakilamaz!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          axios.post("http://localhost:8080/api/products/add", {
            productName: values.productName,
            productBrand: values.productBrand,
            productDetails: values.productDetails,
            productPrice: values.productPrice,
            stock: values.stock,
            productImageUrl: values.productImageUrl,
          });
        }}
      >
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Container>
                <Form className="ui form">
                  <FormField>
                    <Field name="productName" placeholder="Urun adi" />
                    <ErrorMessage
                      name="productName"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <FormField>
                    <Field name="productPrice" placeholder="Urun fiyati" />
                    <ErrorMessage
                      name="productPrice"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <FormField>
                    <Field name="productBrand" placeholder="Urun markasi" />
                    <ErrorMessage
                      name="productBrand"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <FormField>
                    <Field name="productDetails" placeholder="Urun detaylari" />
                    <ErrorMessage
                      name="productDetails"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <FormField>
                    <Field name="stock" placeholder="Urun stok adedi" />
                    <ErrorMessage
                      name="stock"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <FormField>
                    <Field name="productImageUrl" placeholder="Urun gorseli" />
                    <ErrorMessage
                      name="productImageUrl"
                      render={(error) => (
                        <Label
                          pointing
                          basic
                          color="red"
                          content={error}
                        ></Label>
                      )}
                    ></ErrorMessage>
                  </FormField>
                  <Button type="submit" color="green">
                    Ekle
                  </Button>
                </Form>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Formik>
    </div>
  );
}
