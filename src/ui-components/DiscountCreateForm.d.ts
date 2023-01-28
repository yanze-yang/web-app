/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscountCreateFormInputValues = {
    name?: string;
    desc?: string;
    discount_percent?: number;
    active?: boolean;
    created_at?: string;
    modified_at?: string;
};
export declare type DiscountCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    discount_percent?: ValidationFunction<number>;
    active?: ValidationFunction<boolean>;
    created_at?: ValidationFunction<string>;
    modified_at?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscountCreateFormOverridesProps = {
    DiscountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    discount_percent?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    modified_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscountCreateFormProps = React.PropsWithChildren<{
    overrides?: DiscountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiscountCreateFormInputValues) => DiscountCreateFormInputValues;
    onSuccess?: (fields: DiscountCreateFormInputValues) => void;
    onError?: (fields: DiscountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiscountCreateFormInputValues) => DiscountCreateFormInputValues;
    onValidate?: DiscountCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiscountCreateForm(props: DiscountCreateFormProps): React.ReactElement;
