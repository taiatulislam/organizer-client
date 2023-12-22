
const Benefit = () => {
    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center pt-10">Who gets benefit</h2>
                <p className="text-4xl text-center pb-10">---------------------------</p>
                <div className="grid place-items-center">
                    <div className="flex gap-5 justify-center items-center flex-col md:flex-row px-5">
                        <img src="https://i.ibb.co/qN4wxdm/businessman.png" className="max-w-sm rounded-lg shadow-2xl w-[385px] h-[300px]" />
                        <div>
                            <h1 className="text-4xl font-bold">Business Professionals</h1>
                            <p className="py-6 md:text-justify">Entrepreneurs, managers, and employees in both small and large businesses can benefit from the task management website to enhance team collaboration, organize projects, and meet deadlines efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center py-10">
                    <div className="flex gap-5 justify-center items-center flex-col sm:flex-col md:flex-row-reverse px-5">
                        <img src="https://i.ibb.co/vBpZS20/student.png" className="max-w-sm rounded-lg shadow-2xl w-[385px] h-[300px]" />
                        <div>
                            <h1 className="text-4xl font-bold">Students</h1>
                            <p className="py-6 md:text-justify">Students can utilize the task management tools to organize assignments, set study schedules, and manage academic deadlines, helping them stay on top of their coursework and maintain a healthy work-life balance.</p>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center pb-10">
                    <div className="flex gap-5 justify-center items-center flex-col md:flex-row px-5">
                        <img src="https://i.ibb.co/5rG0Gh0/creative.png" className="max-w-sm rounded-lg shadow-2xl w-[385px] h-[300px]" />
                        <div>
                            <h1 className="text-4xl font-bold">Creative Professionals</h1>
                            <p className="py-6 md:text-justify">Designers, writers, and other creative professionals can use the platform to manage creative projects, set milestones, and collaborate with team members or clients, ensuring a smooth workflow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;