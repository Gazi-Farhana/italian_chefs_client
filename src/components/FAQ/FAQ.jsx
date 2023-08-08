const FAQ = () => {
    return (
        <div className="mb-10">
             <h2 className="text-3xl font-bold text-center">WHAT MAKES US UNIQUE?</h2>
            <p className="text-center mb-8 text-xl">We always try to provide the best quality of foods and services. We collect our raw ingridients from all over the world and from our own farm houses. We makes delicious foods that you will never forget how good it tasted. </p>
<div className="flex">
<div className="px-12 space-y-2">
<div  tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
   Are the cooking ingridiests permissible for all community people ?
  </div>
  <div className="collapse-content"> 
    <p>Our raw ingridients are collected from our own farm. They are halal and kosher certified.</p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    What are the speciality of our dishes?
  </div>
  <div className="collapse-content"> 
    <p>Our raw ingrients are free of GMO, artificial color free, chemical fertilizer,harmful pesticides. Therefore, they are safe for kids, adults and aged people. </p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    What we do for our waste foods?
  </div>
  <div className="collapse-content"> 
    <p>Since 2002, we are on campaign of zero wastage of foods. We donate our extra foods to less fortunate individuals, organizations. To prevent platic uses we bio degradable bags.</p>
  </div>
</div>
<div tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Do we provide home delivery services?
  </div>
  <div className="collapse-content"> 
    <p>Absolutely. We delivery foods to consumers door steps through the city.</p>
  </div>
</div>
</div>
<div className="hidden lg:block">
    <img src="assets/image/speciality.jpg" alt="question" />
</div>
</div>
        </div>
    );
};

export default FAQ;