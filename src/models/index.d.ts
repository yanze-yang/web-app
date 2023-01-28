import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerDiscount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Discount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly discount_percent?: number | null;
  readonly active?: boolean | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Discount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly discount_percent?: number | null;
  readonly active?: boolean | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Discount = LazyLoading extends LazyLoadingDisabled ? EagerDiscount : LazyDiscount

export declare const Discount: (new (init: ModelInit<Discount>) => Discount) & {
  copyOf(source: Discount, mutator: (draft: MutableModel<Discount>) => MutableModel<Discount> | void): Discount;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly price?: number | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly productcategoryID: string;
  readonly discountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly price?: number | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly productcategoryID: string;
  readonly discountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerProductInventory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductInventory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quanlity?: number | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productInventoryProductId?: string | null;
}

type LazyProductInventory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductInventory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quanlity?: number | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productInventoryProductId?: string | null;
}

export declare type ProductInventory = LazyLoading extends LazyLoadingDisabled ? EagerProductInventory : LazyProductInventory

export declare const ProductInventory: (new (init: ModelInit<ProductInventory>) => ProductInventory) & {
  copyOf(source: ProductInventory, mutator: (draft: MutableModel<ProductInventory>) => MutableModel<ProductInventory> | void): ProductInventory;
}

type EagerProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly created_at?: string | null;
  readonly modified_at?: string | null;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductCategory = LazyLoading extends LazyLoadingDisabled ? EagerProductCategory : LazyProductCategory

export declare const ProductCategory: (new (init: ModelInit<ProductCategory>) => ProductCategory) & {
  copyOf(source: ProductCategory, mutator: (draft: MutableModel<ProductCategory>) => MutableModel<ProductCategory> | void): ProductCategory;
}