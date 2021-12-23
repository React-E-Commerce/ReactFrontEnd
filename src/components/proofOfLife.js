import useFetch from '../hooks/useFetch';

const ecommerceApi = 'https://e-commerce-app.azurewebsites.net/api';

export default function Products() {
    const { data } = useFetch(ecommerceApi);

    

}

return (
    
)
