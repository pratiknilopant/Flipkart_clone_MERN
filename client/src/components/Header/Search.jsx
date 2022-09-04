
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { Link } from 'react-router-dom';
import { InputBase, Box, styled, List, ListItem, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getProducts as listProducts } from '../../redux/actions/productAction';

const SearchContainer = styled(Box)`
        background: #fff;
        width: 32%;
        border-radius: 2px;
        margin-left: 10px;
        display: flex;
    `;
const InputBaseSearch = styled(InputBase)`
        width: 100%;
        padding-left: 20px;
        font-size: 14px;
        font-weight: 400;
    `;
const BoxInput = styled(Box)`
        color: blue;
        padding: 4px;
        dispaly: flex;
    `;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {
    const [text, setText] = useState();
    const [open, setOpen] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <SearchContainer>
            <InputBaseSearch
                placeholder='Search for Products, brands and more'
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <BoxInput>
                <SearchIcon />
            </BoxInput>
            {
                text &&
                <ListWrapper hidden={open}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setText('')}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>


    )



}

export default Search;