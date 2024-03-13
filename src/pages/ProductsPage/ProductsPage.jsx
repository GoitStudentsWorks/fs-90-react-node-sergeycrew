import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
} from '../../redux/products/productOperations';
import { selectContainsProducts, selectIsLoading } from '../../redux/products/productsSelectors';

import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty/ProductListEmpty';

import * as s from './ProductsPage.styled';
import { Container } from 'styles/container';
import { ProductsBackground } from '../../components/ProductsBg/ProductsBg';
import { changeProductsReset } from '../../redux/products/productListSlice';
import { DiaryLoader } from '../../components/DiaryLoader/DiaryLoader';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const containsProducts = useSelector(selectContainsProducts);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(changeProductsReset());

    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsBackground>
      <Container>
        <s.WrapperFilters>
          <s.Title>Products</s.Title>
          <ProductsFilters />
        </s.WrapperFilters>
        {isLoading ? <DiaryLoader /> : containsProducts ? <ProductList /> : <ProductListEmpty />}

      </Container>
    </ProductsBackground>
  );
};

export default ProductsPage;
