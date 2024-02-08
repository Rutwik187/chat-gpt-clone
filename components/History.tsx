
const data = [
    { id: 1, msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi." },
    { id: 2, msg: "Vestibulum quis augue. Maecenas sollicitudin. Integer ut risus. Nam sodales mi vitae dolor ullamcorper et vulputate enim accumsan." },
    { id: 3, msg: "Morbi orci magna, tincidunt vitae molestie nec, molestie at mi. Nulla nulla lorem, suscipit in posuere in, interdum non magna." },
    { id: 4, msg: "Praesent ac sem eget est egestas volutpat. Suspendisse fermentum fermentum arcu, nec viverra neque volutpat sit amet. Curabitur at dui felis. Nunc euismod, dui sit amet imperdiet hendrerit, turpis purus sollicitudin nunc." },
    { id: 5, msg: "Vestibulum ornare mi sit amet sem ultrices viverra. Integer auctor, velit nec porta sollicitudin, magna metus tincidunt ligula, id consequat nisl odio sit amet turpis." },
    { id: 6, msg: "Fusce interdum lacus augue, vel feugiat nunc semper id. In hac habitasse platea dictumst. Nam ut condimentum nisi. Pellentesque sollicitudin metus nec metus ullamcorper, nec vestibulum nulla gravida. Ut at lectus ac nulla efficitur vehicula." }
];

const History = () => {
    return (
        <div className="h-full ">
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className="w-full p-2 m-2 border cursor-pointer hover:bg-accent dark:Hover:bg-white h-12 overflow-hidden whitespace-nowrap text-ellipsis rounded-md">{item.msg}</div>
                    )
                })
            }
        </div>
    );
};

export default History;