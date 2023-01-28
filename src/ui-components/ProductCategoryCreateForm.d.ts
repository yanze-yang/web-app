/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCategoryCreateFormInputValues = {
    name?: string;
    desc?: string;
    created_at?: string;
    modified_at?: string;
};
export declare type ProductCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    created_at?: ValidationFunction<string>;
    modified_at?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCategoryCreateFormOverridesProps = {
    ProductCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    modified_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onSuccess?: (fields: ProductCategoryCreateFormInputValues) => void;
    onError?: (fields: ProductCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCategoryCreateFormInputValues) => ProductCategoryCreateFormInputValues;
    onValidate?: ProductCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCategoryCreateForm(props: ProductCategoryCreateFormProps): React.ReactElement;
