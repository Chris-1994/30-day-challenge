@app.route("/shopify_add_color_variant_to_existing_product", methods=["POST", "GET"])
@requires_auth
def shopify_add_color_variant_to_existing_product():
    model_name = request.form.get("sku")
    product_id = international_store.model_name_to_product_id_map()[model_name]
    colors = request.form.getlist("colors")
    color_codes = [international_store.color_to_color_code_map()[color]
                   for color in colors]
    product = international_store.get_product(product_id)
    for i in range(len(colors)):
        new_variant_response = add_color_variant_to_existing_product(product, product_id, color_codes[i],
                                                                     model_name, colors[i])
        if type(new_variant_response) is Error:
            return render_template("error_message.html", error_message=new_variant_response.message)
    return render_template("shopify_add_color_variant_to_existing_product.html", new_variant=new_variant_response,
                           skus=international_store.get_skus(),
                           color_codes=international_store.color_to_color_code_map())
