module ApplicationHelper
	def react_component(name, props = {}, options = {}, &block)
	    html_options = options.reverse_merge(data: {
	      react_class: name,
	      react_props: (props.is_a?(String) ? props : props.to_json)
	    })
	    content_tag(:div, '', html_options, &block)
	end

	def link_to_add_fields(name, f, association)
		new_object = f.object.send(association).klass.new
	    id = new_object.object_id
	    fields = f.fields_for(association, new_object, child_index: id) do |builder|
	      render(association.to_s.singularize + "_fields", f: builder)
    end
    
    link_to(name, '#', class: "add_fields add_fields2", data: {id: id, fields: fields.gsub("\n", "")})
  end
end
