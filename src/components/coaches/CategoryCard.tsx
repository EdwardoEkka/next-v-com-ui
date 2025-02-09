const CategoryCard = ({ cat, color }: { cat: string; color: string }) => {
    return (
        <div
            className="w-full p-6 aspect-square rounded-xl flex items-center justify-center"
            style={{ backgroundColor: color }}
        >
            <h1 className="text-2xl font-semibold text-black">{cat}</h1>
        </div>
    );
};

export default CategoryCard;
