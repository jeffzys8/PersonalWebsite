package routers

import (
	"github.com/astaxie/beego/context"

	"github.com/astaxie/beego"
	"github.com/zys980808/personalwebsite/backend/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Get("/testget", func(ctx *context.Context) {
		ctx.Output.Body([]byte("bob"))
	})
}
