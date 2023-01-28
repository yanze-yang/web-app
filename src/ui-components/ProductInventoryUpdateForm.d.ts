/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductInventory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductInventoryUpdateFormInputValues = {
    quanlity?: number;
    created_at?: string;
    modified_at?: string;
};
export declare type ProductInventoryUpdateFormValidationValues = {
    quanlity?: ValidationFunction<number>;
    created_at?: ValidationFunction<string>;
    modified_at?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductInventoryUpdateFormOverridesProps = {
    ProductInventoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quanlity?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    modified_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductInventoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductInventoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productInventory?: ProductInventory;
    onSubmit?: (fields: ProductInventoryUpdateFormInputValues) => ProductInventoryUpdateFormInputValues;
    onSuccess?: (fields: ProductInventoryUpdateFormInputValues) => void;
    onError?: (fields: ProductInventoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductInventoryUpdateFormInputValues) => ProductInventoryUpdateFormInputValues;
    onValidate?: ProductInventoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductInventoryUpdateForm(props: ProductInventoryUpdateFormProps): React.ReactElement;
