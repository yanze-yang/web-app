/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Discount } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DiscountUpdateForm(props) {
  const {
    id: idProp,
    discount,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    desc: "",
    discount_percent: "",
    active: false,
    created_at: "",
    modified_at: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [discount_percent, setDiscount_percent] = React.useState(
    initialValues.discount_percent
  );
  const [active, setActive] = React.useState(initialValues.active);
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [modified_at, setModified_at] = React.useState(
    initialValues.modified_at
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = discountRecord
      ? { ...initialValues, ...discountRecord }
      : initialValues;
    setName(cleanValues.name);
    setDesc(cleanValues.desc);
    setDiscount_percent(cleanValues.discount_percent);
    setActive(cleanValues.active);
    setCreated_at(cleanValues.created_at);
    setModified_at(cleanValues.modified_at);
    setErrors({});
  };
  const [discountRecord, setDiscountRecord] = React.useState(discount);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Discount, idProp)
        : discount;
      setDiscountRecord(record);
    };
    queryData();
  }, [idProp, discount]);
  React.useEffect(resetStateValues, [discountRecord]);
  const validations = {
    name: [],
    desc: [],
    discount_percent: [],
    active: [],
    created_at: [],
    modified_at: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          desc,
          discount_percent,
          active,
          created_at,
          modified_at,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Discount.copyOf(discountRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DiscountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              desc,
              discount_percent,
              active,
              created_at,
              modified_at,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Desc"
        isRequired={false}
        isReadOnly={false}
        value={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              desc: value,
              discount_percent,
              active,
              created_at,
              modified_at,
            };
            const result = onChange(modelFields);
            value = result?.desc ?? value;
          }
          if (errors.desc?.hasError) {
            runValidationTasks("desc", value);
          }
          setDesc(value);
        }}
        onBlur={() => runValidationTasks("desc", desc)}
        errorMessage={errors.desc?.errorMessage}
        hasError={errors.desc?.hasError}
        {...getOverrideProps(overrides, "desc")}
      ></TextField>
      <TextField
        label="Discount percent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discount_percent}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              desc,
              discount_percent: value,
              active,
              created_at,
              modified_at,
            };
            const result = onChange(modelFields);
            value = result?.discount_percent ?? value;
          }
          if (errors.discount_percent?.hasError) {
            runValidationTasks("discount_percent", value);
          }
          setDiscount_percent(value);
        }}
        onBlur={() => runValidationTasks("discount_percent", discount_percent)}
        errorMessage={errors.discount_percent?.errorMessage}
        hasError={errors.discount_percent?.hasError}
        {...getOverrideProps(overrides, "discount_percent")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              desc,
              discount_percent,
              active: value,
              created_at,
              modified_at,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={created_at && convertToLocal(new Date(created_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              desc,
              discount_percent,
              active,
              created_at: value,
              modified_at,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label="Modified at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={modified_at && convertToLocal(new Date(modified_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              desc,
              discount_percent,
              active,
              created_at,
              modified_at: value,
            };
            const result = onChange(modelFields);
            value = result?.modified_at ?? value;
          }
          if (errors.modified_at?.hasError) {
            runValidationTasks("modified_at", value);
          }
          setModified_at(value);
        }}
        onBlur={() => runValidationTasks("modified_at", modified_at)}
        errorMessage={errors.modified_at?.errorMessage}
        hasError={errors.modified_at?.hasError}
        {...getOverrideProps(overrides, "modified_at")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || discount)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || discount) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
