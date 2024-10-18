const CategoryPage = ({ params }) => {
    const categoryId = Number(params.categoryId);
    if (categoryId && categoryId <= 100) {
        return <div>{`Your category ID is: ${params.categoryId}`}</div>
    }

    return <div>Your id is incorrect</div>
};

export default CategoryPage;