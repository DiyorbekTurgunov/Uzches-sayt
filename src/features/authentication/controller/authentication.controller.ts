import {Controller, Post} from "@nestjs/common";
import {AuthenticationService} from "../services/authentication.service";

@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post()
}