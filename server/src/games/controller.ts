import {
  JsonController,
  Authorized,
  CurrentUser,
  Post,
  Put,
  Param,
  BadRequestError,
  HttpCode,
  NotFoundError,
  ForbiddenError,
  Get,
  Body,
  Patch
} from "routing-controllers";
import User from "../users/entity";
import { Game, Player, Board } from "./entities";
import { Validate } from "class-validator";
import { io } from "../index";
import { createRandomBoard, placeSheep, sheepShapes, shotHits } from "./logic";

@JsonController()
export default class GameController {
  @Post("/games")
  @HttpCode(201)
  async createGame(@CurrentUser() user: User, @Body() game: { board: Board }) {
    game.board = createRandomBoard();
    const entity = await Game.create().save();

    await Player.create({
      game: entity,
      user
    }).save();

    io.emit("action", {
      type: "ADD_GAME",
      payload: game
    });

    return game;
  }

  /*@Post("/games")
  @HttpCode(201)
  async createGame(@Body() game: { board: Board }) {
    game.board = createRandomBoard();

    return game;
  }*/

  /*Put("/games/:"id")
  async updateGame(@Param("id") id: number, @Body() update: { board: Board }) {
    let game = await Game.findOne(id);
    if (!game) throw new NotFoundError("Game not found!");

    game.board = shotHits(game.board, [0, 2]);

    Game.merge(game, update);
    game.save();
    return game;
  }*/

  @Put("/games/:id")
  async updateGame(@Param("id") id: number, @Body() update: Partial<Game>) {
    const game = await Game.findOne({ id: id });
    if (!game) throw new NotFoundError("game not found");
    game.board = shotHits(game.board, [0, 2]);
    return Game.merge(game, update).save();
  }

  /*@Put("/games/:id")
  async updateGame(@Param("id") id: number, @Body() update: { board: Board }) {
    let game = await Game.findOne({ id: id });
    if (!game) throw new NotFoundError("Game not found!");

    game.board = placeSheep(game.board, sheepShapes["fatSheep"], [0, 0]);

    Game.merge(game, update);
    game.save();
    return game;
  }*/
}
