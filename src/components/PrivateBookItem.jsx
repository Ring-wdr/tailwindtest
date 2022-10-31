export const PrivateBookItem = () =>

    <div className="flex w-[250px] relative
                    border-solid border-2 bg-white/[.3] m-1
                    hover:bg-white/[.6]">
        <div>
            <div className="bg-blue-500/75 rounded-full m-[5px] mt-[5px]
            w-[30px] h-[30px]
            hover:w-[35px] hover:h-[35px] hover:m-[2.5px] hover:mt-[2.5px]">
            </div>
        </div>
        <div className="flex-col w-[230px]">
            <div className="m-3 mb-1 w-auto hover:text-red-300">Page Title...</div>
            <div className="m-3 mb-1 w-auto hover:text-red-300">Contents...</div>
            <div className="m-3 mb-1 w-auto flex justify-between">
                <div className="hover:text-blue-600">Like: 10</div>
                <div className="hover:text-green-300">Reply: 10</div>
            </div>
        </div>
    </div>